const os = require('os');

export enum GuessedTerminal {
    hyper = 'hyper',
    iterm2 = 'iterm2',
    terminal = 'terminal'
}

export function guessTerminal(): GuessedTerminal | null {
    if (os.platform() !== 'darwin') {
        return null;
    }

    switch (process.env.TERM_PROGRAM) {
        case 'Apple_Terminal':
            return GuessedTerminal.terminal;
        case 'Hyper':
            return GuessedTerminal.hyper;
        case 'iterm':
            return GuessedTerminal.iterm2;
        default:
            return null;
    }
}