#!/bin/sh

## Validate OPENAI_API_KEY is set
if [ -z "$OPENAI_API_KEY" ]; then
  echo "Error: OPENAI_API_KEY is not set."
  echo "Please set it in your environment before running this script."
  exit 1
fi

echo 
echo "Building illuminate.js... "
echo "it will take 5 minutes... 🚧 🚀 🚧 "
echo 

time jq -n \
 --rawfile developer developer.txt \
 --rawfile authentication authentication.md \
 --rawfile polls polls.js \
 --rawfile swagger swagger.yaml \
 --rawfile user user.md \
'{
  model: "o1-pro",
  input: [
    { role: "developer", content: [{ type: "input_text", text: $developer }]},
    { role: "user", content: [{ type: "input_text", text: $authentication }]},
    { role: "user", content: [{ type: "input_text", text: $swagger }]},
    { role: "user", content: [{ type: "input_text", text: $polls }]},
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
> illuminate.js

cat illuminate.js > revisions/illuminate-$(date +%Y%m%d%H%M%S).js

echo
echo "Build complete 🎉 "
echo "Output saved to illuminate.js and revisions directory."
echo
echo "Run: node illuminate.js to provision."
echo
