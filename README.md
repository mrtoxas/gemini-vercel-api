# Gemini Flash Text Generation via Express and Vercel AI SDK
This project is a Node.js application deployed on Vercel, utilizing Express and the Gemini Flash API. The core functionality involves processing user prompts and generating text responses through the Gemini Flash API.

## Configuration
Create a .env file in the root of the project and add your API key:

```GOOGLE_GENERATIVE_AI_API_KEY=your_api_key```

You can get the key in [Google AI Studio](https://aistudio.google.com/app/apikey?hl=ru).

## Usage
- Method: POST
- Description: Accepts a text prompt and returns the generated text.
- Parameters:
  - ```prompt``` (string): The text prompt for generation.

## Example Request
### Dev mode:
```
curl -X POST http://localhost:3000/api/gemini \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Your text prompt"}'
```
### In production:
```
curl -X POST http://your-domain.vercel.app/gemini \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Your text prompt"}'
```

## Prerequisites

- Node.js (v14 or higher)
- Vercel account
- Google Generative AI API Key
