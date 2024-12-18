# ベースイメージとして軽量な Node.js を使用
FROM node:22-alpine

# 作業ディレクトリ設定
WORKDIR /app

# package.jsonとlockファイルをコピーし、依存関係インストール
COPY package*.json ./
RUN npm install

# ソースコードコピー（backendとfrontendをまとめて）
COPY . .

# 環境変数やエキスポートポート
EXPOSE 3000

# コンテナ起動時に実行するコマンド
CMD ["node", "backend/server.js"]
