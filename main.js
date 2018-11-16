enchant();

const main = () => {
    const game = new Core();
    const scene = game.rootScene;

    game.on('load', () => {
        const test = new Label("test");
        scene.addChild(test);
    });
    game.start();
};

window.addEventListener('load', main);
