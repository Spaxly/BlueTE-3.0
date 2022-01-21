import chalk from 'chalk';
import figlet from 'figlet';

export function Logo() {
    console.log(
        chalk.blueBright(
            figlet.textSync('BlueTE 3.0', { horizontalLayout: 'full' })
        )
    )
}