cd ./src/pages/games

echo "welches spiel soll angelegt werden"
read name

inhalt='
<script setup lang="ts">
</script>

<template>
  <h2>'"$name"'</h2>
</template>'

echo "index.vue wird erstellt"
mkdir -p "$name"
echo "$inhalt" > "$name/index.vue"

echo "$name/highscore/index.vue wird erstellt"
mkdir -p "$name/highscore"
echo "$inhalt" > "$name/highscore/index.vue"

echo "$name/download/index.vue wird erstellt"
mkdir -p "$name/download"
echo "$inhalt" > "$name/download/index.vue"
