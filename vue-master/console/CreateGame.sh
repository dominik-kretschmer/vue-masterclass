cd ./src/pages/games

echo "welches spiel soll angelegt werden"
read name
echo "eine kurz beschreibung des spiels"
read description

inhalt='
<script setup lang="ts">
</script>

<template>
  <h2>'"$name"'</h2>
</template>'

echo "index.vue wird erstellt"
mkdir -p "$name"
echo '<template>
       <GameInfoSection
           title='"$name"'
           description="'$description'"
           image-url="/'$name'.png"
       />
     </template>

     <script setup lang="ts">
     import GameInfoSection from "@/components/GameDetail.vue"
     </script>' > "$name/index.vue"


echo "$name/highscore/index.vue wird erstellt"
mkdir -p "$name/highscore"
echo "$inhalt" > "$name/highscore/index.vue"

echo "$name/download/index.vue wird erstellt"
mkdir -p "$name/download"
echo "$inhalt" > "$name/download/index.vue"

echo "bitte titel bild in public ordner einfügen und '$name'.png nennen"