import { Abyss, ITheme} from "./themes/default.themes";

interface IConfig {
  version: string,
  theme: ITheme,
}
export const config: IConfig = {
  version: "1.0.0",
  theme: Abyss
}
