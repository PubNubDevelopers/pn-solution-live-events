#!/bin/sh

echo 
echo "Building index.js... "
echo "it will take 5 minutes... 🚧 🚀 🚧 "
echo 

time jq -n --rawfile developer prompt/developer.txt --rawfile user prompt/user.md \
'{
  model: "o1-pro",
  input: [
    { role: "developer", content: [{ type: "input_text", text: $developer }]},
    { role: "user", content: [{ type: "input_text", text: $user }]}
  ],
  text: { format: { type: "text" } },
  reasoning: { effort: "medium" },
  tools: [],
  store: true
}' | curl -Ls https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d @- \
| jq -r '.output[] | select(.type == "message") | .content[] | select(.type == "output_text").text' \
> index.js

cat index.js > revisions/index-$(date +%Y%m%d%H%M%S).js

echo
echo "Build complete 🎉 "
echo "Output saved to index.js and revisions directory."
echo
