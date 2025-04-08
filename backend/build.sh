#!/bin/sh

DEVELOPER=$(sed -e 's/"/\\"/g' build/developer.txt | sed -e "s/['‘’]/\\'/g" | tr -s '\n' ' ' | sed 's/ \+/ /g')
PROMPT=$(sed -e 's/"/\\"/g' build/prompt.txt | sed -e "s/['‘’]/\\'/g" \ | tr -s '\n' ' ' | sed 's/ \+/ /g')
GAMEDATA=$(sed -e 's/"/\\"/g' game-data.js | sed -e "s/['‘’]/\\'/g" | tr -s '\n' ' ' | sed 's/ \+/ /g')

echo 
echo "Building index.js... "
echo "it will take 5 minutes... 🚧 🚀 🚧 "
echo 

curl -Ls https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
  "model": "o1-pro",
  "input": [
    {
      "role": "developer",
      "content": [
        {
          "type": "input_text",
          "text": "'"$DEVELOPER"'"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "input_text",
          "text": "'"$PROMPT"' game-data.js: '"$GAMEDATA"'"
        }
      ]
    }
  ],
  "text": {
    "format": {
      "type": "text"
    }
  },
  "reasoning": {
    "effort": "medium"
  },
  "tools": [],
  "store": true
}' | jq -r '.output[] | select(.type == "message") | .content[] | select(.type == "output_text").text' > index.js

cat index.js > revisions/index-$(date +%Y%m%d%H%M%S).js

echo "Build complete 🎉 "
echo "Output saved to index.js and revisions directory."
