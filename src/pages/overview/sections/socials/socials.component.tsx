import { Link } from '~/components/link/link.component';
import { Codepen, Contact, Email, Github, Linkedin, Npm, Stackoverflow, Twitter } from '~/images/social/index';
import style from './socials.module.scss';

export const Socials = () => (
  <div className="center">
    <div className={style.Socials}>
      <div className={style.content}>
        <Card newTab href="https://www.linkedin.com/in/cooper-runyan-52a343225/">
          {{ name: 'LinkedIn', logo: Linkedin }}
        </Card>
        <Card newTab href="https://twitter.com/CooperRunyan1">
          {{ name: 'Twitter', logo: Twitter }}
        </Card>
        <Card newTab href="https://www.github.com/cooperrunyan">
          {{ name: 'Github', logo: Github }}
        </Card>
        <Card newTab href="mailto:cooperrunyan@gmail.com">
          {{ name: 'Email', logo: Email }}
        </Card>
        <Card newTab href="https://www.npmjs.com/~cooperrunyan">
          {{ name: 'Npm', logo: Npm }}
        </Card>
        <Card newTab href="https://codepen.io/cooperrunyan">
          {{ name: 'Codepen', logo: Codepen }}
        </Card>
        <Card newTab href="https://stackoverflow.com/users/17047560/cooper-runyan">
          {{ name: 'Stackoverflow', logo: Stackoverflow }}
        </Card>
        <Card newTab={false} href="/contact">
          {{ name: 'Contact', logo: Contact }}
        </Card>
      </div>
    </div>
  </div>
);

const Card = ({ children, href, newTab }) => (
  <Link href={href} className={style.Link} newTab={!!newTab}>
    <p>{children?.name}</p>
    <children.logo color="var(--black)" />
  </Link>
);
