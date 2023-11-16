New Project

    npm install -g @ionic/cli

    ionic start miProyecto blank --type=react

    cd miProyecto

    npm install @capacitor/core @capacitor/cli

    npx cap init

    npx cap add android

    ionic build

    npx cap copy

    npx cap doctor

Run

    ionic cap run android -l --external

Debug

    chrome://inspect/#devices

SVGs

    npm install -g @ionic/cli ionicons
    ionicons convert mi-icono.svg --platform=ios --mode=md

---

Fuentes

https://www.npmjs.com/package/vite-plugin-svgr
https://stackoverflow.com/questions/66209806/ionic-5-react-use-ion-icon-to-embed-custom-svg