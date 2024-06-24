from flask import Flask, request, jsonify
from mistralai.client import MistralClient
from mistralai.models.chat_completion import ChatMessage
import os
from flask_cors import CORS, cross_origin
from openai import OpenAI
from pathlib import Path

app = Flask(__name__)
CORS(app)

# Remplacez YOUR_API_KEY par votre propre clé API Mistral et OpenAI
mistral_api_key = "YBkBOowTj8xDVjr63uDNH2l22YeEGMqn"
openai_api_key = "sk-proj-TpuKPXbz7EsTGnh4V76CT3BlbkFJB514qHgQQYpxASLVNJ93"
model = "mistral-large-latest"
@app.route("/generate", methods=["POST"])
def generate():
    # Récupérer les données envoyées par le front-end
    data = request.get_json()
    print('Données reçues:', data)
    nom = data["nom"]
    description = data["description"]
    lieu = data["lieu"]
    # Utilisez les informations reçues pour créer le prompt
    prompt = f"Je suis une femme. Écris-moi une histoire romantique et sensuelle d'environs 800 mots.Tu me présenteras {nom} , voici sa description : {description}. Puis, tu nous mettras en scène dans {lieu} selon un scénario romantique qui n'exclura en rien la partie charnelle de mon lien avec {nom}. Lors de ce préambule, tu introduiras la montée de notre attirance mutuelle  qui amènera {nom} à m'approcher pour me séduire, provoquant une irrésistible attraction, puis une excitation sexuelle contre laquelle je ne pourrai lutter. Ensuite, tu décrirais minutieusement les baisers gourmands que nous échangerons, l'état de nos sexes gonflés par l'attente et le désir ardent de {nom} envers moi. Dès lors, le corps à corps débutera. Les préliminaires seront passionnés et leur intensité variera selon mes envies et la fougue de mon partenaire.Tu m'expliqueras comment {nom} me  stimule exactement comme je le veux, me laissant sans cesse au bord de l'orgasme. Le rapport évoluera vers une pénétration si je le souhaites, et bien que {nom} soit au plus haut au point de l'excitation, c'est moi qui déciderai.Raconte moi avec une profusion inouïe de détails la connection profonde qui m'unit à {nom} durant le rapport, combien il cherche à me combler et la manière dont je m'abandonne absolument à ses doigts, son sexe et son amour pour moi.. Une fois que j'aurais été satisfaite, tu feras doucement décroître la tension, puis la vague d'apaisement qui m'envahit lorsque nos corps demeurent enlacés au-delà du plaisir sexuel."
    # Créer le client Mistral
    mistral_client = MistralClient(api_key=mistral_api_key)

    # Créer les messages pour la demande de chat
    messages = [
        ChatMessage(role="user", content=prompt)
    ]

    # Envoyer la demande de chat à l'API Mistral
    response = mistral_client.chat(model=model, messages=messages)

    # Extraire le texte généré par l'API Mistral
    texte = response.choices[0].message.content
    # Renvoie le texte généré au front-end
    print('Réponse générée:', texte)
    return jsonify({"texte": texte})

# Créer le client OpenAI
openai_client = OpenAI(api_key=openai_api_key)

@app.route("/generate_audio", methods=["POST"])
def generate_audio():
    data = request.get_json()
    texte = data.get('texte')

    # Créer le client OpenAI
    openai_client = OpenAI(api_key=openai_api_key)

    # Chemin du fichier audio de sortie
    speech_file_path = Path(__file__).parent/ "assets/output_sexe1.mp3"

    # Générer l'audio à partir du texte
    response = openai_client.audio.speech.create(
        model="tts-1-hd",
        voice="onyx",
        input=texte
    )

    response.stream_to_file(speech_file_path)

    
    return "speech_file_path"

if __name__ == "__main__":
    app.run(debug=True)