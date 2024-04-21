from flask import Flask, request, jsonify
from mistralai.client import MistralClient
from mistralai.models.chat_completion import ChatMessage
import os
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
CORS(app)

# Remplacez YOUR_API_KEY par votre propre clé API Mistral
api_key = "YBkBOowTj8xDVjr63uDNH2l22YeEGMqn"
model = "mistral-large-latest"

@app.route("/generate", methods=["POST"])
def generate():
    # Récupérer les données envoyées par le front-end
    data = request.get_json()
    print('Données reçues:', data)
    nom = data["nom"]
    description = data["description"]
    lieu = data["lieu"]

    # Créer le prompt avec les choix de l'utilisateur
    prompt = f"Ecris une histoire érotique de plus de 500 mots ou tu joueras le rôle d'une personne appelée {nom} : {description} dans le lieu suivant : {lieu}. Tu raconteras ta rencontre avec le lecteur et fera monter la tension jusqu'au moment ou tu décriras les ébats physiques explicitement au lecteur a qui tu t'adresseras directement"

    # Créer le client Mistral
    client = MistralClient(api_key=api_key)

    # Créer les messages pour la demande de chat
    messages = [
        ChatMessage(role="user", content=prompt)
    ]

    # Envoyer la demande de chat à l'API Mistral
    response = client.chat(model=model, messages=messages)

    # Extraire le texte généré par l'API Mistral
    texte = response.choices[0].message.content

    # Renvoie le texte généré au front-end
    print('Réponse générée:', texte)
    return jsonify({"texte": texte})

@app.route("/generate_audio", methods=["POST"])
def generate_audio():
    # Récupérer les données envoyées par le front-end
    data = request.get_json()
    print('Données reçues:', data)
    texte = data["texte"]

    # Générer l'audio à partir du texte
    CHUNK_SIZE = 1024
    url = "https://api.elevenlabs.io/v1/text-to-speech/<29vD33N1CtxCmqQRPOHJ>"

    headers = {
      "Accept": "audio/mpeg",
      "Content-Type": "application/json",
      "xi-api-key": "<6ca609ba26a21077dc1e6a3e12e7c444>"
    }

    data = {
      "text": texte,
      "model_id": "eleven_monolingual_v1",
      "voice_settings": {
        "stability": 0.5,
        "similarity_boost": 0.5
      }
    }

    response = requests.post(url, json=data, headers=headers)
    with open('output.mp3', 'wb') as f:
        for chunk in response.iter_content(chunk_size=CHUNK_SIZE):
            if chunk:
                f.write(chunk)

    # Renvoie le nom du fichier audio généré au front-end
    return jsonify({"filename": "output.mp3"})
if __name__ == "__main__":
    app.run(debug=True)






