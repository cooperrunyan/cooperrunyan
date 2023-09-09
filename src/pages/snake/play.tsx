import { Snake } from '@/components/Snake/Snake';
import { CfgBuilder } from '@/components/Snake/models/Config';
import { Game } from '@/components/Snake/models/Game';
import { KeyboardController } from '@/components/Snake/models/KeyboardController';

export default function PlaySnake() {
  return (
    <>
      <Snake
        game={canvas => {
          const controller = new KeyboardController();
          const game = new Game(
            canvas,
            CfgBuilder({ tickRate: 75 }),
            controller,
          );
          game.start();

          const rerender = () => game.rerender();

          window.addEventListener('resize', rerender);

          return () => {
            window.removeEventListener('resize', rerender);
            controller.stop();
            game.stop();
          };
        }}
      />
    </>
  );
}