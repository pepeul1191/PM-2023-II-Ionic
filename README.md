npm install -g @ionic/cli

ionic start miProyecto blank --type=react

cd miProyecto

npm install @capacitor/core @capacitor/cli

npx cap init

npx cap add android

ionic build

npx cap copy

npx cap doctor

ionic cap run android -l --external

