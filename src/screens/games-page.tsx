import React from "react";

enum Game {
    Tetris = "tetris",
    Invaders = "invaders",
    Fatal = "fatal"
}

interface GameData {
    repo: string;
    url: string;
}

interface IProperties {

}

interface IState {
    game: Game | null;
}

export class GamesPage extends React.Component<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {
            game: null
        };
    }

    public render(): JSX.Element {
        const data: GameData | null = this.getGame();

        if (data) {
            return (
                <div className="game-list">
                    <div className="game-instructions">
                        <div className="game-buttons">
                            <button onClick={() => this.setState({ game: null })}>Go Back</button>
                        </div>
                    </div>
                    <div className={`game ${this.state.game}`}>
                        <iframe id="game-frame" className="desktop-only" src={data.url} />
                        <div className="mobile-only">Sorry! Games are only available on Desktop at the moment. But you can still get a link to the code below.</div>
                        <a href={data.repo} target="_blank">{this.state.game} code</a>
                        <br />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="game-instructions">
                    <div>Select a game to play!</div>
                    <div className="game-buttons">
                        <button onClick={() => this.setState({ game: Game.Tetris })}>Tetris</button>
                        <button onClick={() => this.setState({ game: Game.Invaders })}>Invaders</button>
			<button onClick={() => this.setState({ game: Game.Fatal })}>Fatal</button>
                    </div>
                </div>
            );
        }
    }

    private getGame(): GameData | null {
        switch (this.state.game) {
            case Game.Tetris:
                return {
                    repo: "https://bitbucket.org/orbonis-games/tetris/",
                    url: "/games/tetris/?hideRepo=true&prefix=tetris_"
                };
            case Game.Invaders:
                return {
                    repo: "https://bitbucket.org/orbonis-games/space-invaders/",
                    url: "/games/invaders/?hideRepo=true&prefix=tetris_"
                };
	    case Game.Fatal:
		return {
		    repo: "https://github.com/Orbonis/fatal-dungeon/",
		    url: "/games/fatal/"
		};
            default:
                return null;
        }
    }
}
