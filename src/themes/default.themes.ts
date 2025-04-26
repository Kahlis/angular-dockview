export interface ITheme {
  name: string;
  path: string;
}

const commonPath: string = "dockview-theme";

export const Dark: ITheme = {
  name: 'Dark',
  path: `${commonPath}-dark`
}

export const Light: ITheme = {
  name: 'Light',
  path: `${commonPath}-light`
}

export const VS: ITheme = {
  name: 'VS',
  path: `${commonPath}-vs`
}

export const Abyss: ITheme = {
  name: 'Abyss',
  path: `${commonPath}-abyss`
}

export const Dracula: ITheme = {
  name: 'Dracula',
  path: `${commonPath}-dracula`
}

export const Replit: ITheme = {
  name: 'Replit',
  path: `${commonPath}-replit`
}
