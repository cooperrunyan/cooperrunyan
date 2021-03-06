---
title: The Key To Development In Docker
timestamp: 4-27-22
---

# The Key To Development In Docker

In short, you need to utilize `docker volumes`.

# Volumes

## What is a Volume?

Volumes are storage bins that hold data that can be used from container to
container.

> I would use the word, `container`, instead of, `storage bin`, because that'd
> be more accurate. This **does not** mean that docker volumes should be
> confused with docker containers

## Use Cases

A typical use case would be database files. In development, instead of storing
user data within its container (which gets reset every time a new container
instance is created). To fix this, you can create a volume for the container and
store the files inside. This way, whenever the container stops or gets
destroyed, _all data_ stored in a volume will get _saved_.

Another use for volumes would be sharing data between multiple containers. Each
container can communicate with the volume and read/write data (as long as
read/write permission was granted).

## Creating a volume

With docker-compose, volumes are extremely easy to create and manage. To create
one, in a `docker-compose.yml` file, write:

```YAML
volumes:
  your_volume_name:
```

The volume can then be referenced in the image service later in the file:

```YAML
services:
  your_service_name:
    volumes:
      your_volume_name:
    ...
```

## Alternate Use Case

Volumes can be used in another way; they can connect local computer files with
files within containers.

> Think of a symlink

This allows for container files to update whenever a local corresponding file.

For example, if you are editing a file called hello.js, and a volume is set up
for it, whenever you save the file, the hello.js within the docker container
gets updated.

Start by creating a `docker-compose.yml` file.

```YAML
version: '3.4'

services:
  app:
    build:
      context: .
      dockerfile: ./Dockerfile
    volumes:
      - ./src:/app/src
```

If this looks too complicated, ignore everything but the `volumes` section.

The volume syntax is:

```YAML
volumes:
  - PATH_TO_SOURCE:ABSOLUTE_PATH
```

> Note: `PATH_TO_SOURCE` is a path relative to the `docker-compose.yml` file

> `ABSOLUTE_PATH` is an absolute path within the container `ABSOLUTE_PATH` can
> also be represented as `WORKDIR`/`RELATIVE_PATH`

> As well, `PATH_TO_SOURCE` can be either a path or a directory If it is a
> directory, every file within it is tracked

## How it can help

When running a command that watches files, like `nodemon` or `vite`, in docker,
it usually doesn't help, unless of course there was a magical system where you
can link local files to container files. Unless you haven't been paying
attention so far, the obvious solution is a volume.

### Example

File tree:

```
Project
 ??????src
 ??? ??????index.ts
 ??? ??????module.ts
 ??????package.json
 ??????docker-compose.yml
 ??????Dockerfile
 ??????tsconfig.json
 ??????.dockerignore
```

```YAML
# docker-compose.yml

services:
  app:
    volumes:
      - ./src:/app/src
```

In this example, we'll say you have `tsc . -w` server running in the docker
container. This watches the files in the `./src` directory, so whenever a file
changes, it recompiles. With the volume set up in the `docker-compose` file,
whenever you make an update to a file in the `./src` directory, it will
automatically update that file in the docker container without needing to
rebuild the image.
