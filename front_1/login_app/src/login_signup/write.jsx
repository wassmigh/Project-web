import React, { useState } from 'react';
import axios from 'axios';

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleCreatePost = async () => {
    try {
      // Envoi des données du nouveau post au serveur
      await axios.post('http://your-api-endpoint.com/posts', {
        title,
        content,
        category
      });
      // Redirection vers la page d'accueil après la création du post
      window.location = '/';
    } catch (error) {
      console.error('Erreur lors de la création du post :', error);
    }
  };

  return (
    <div>
      <h2>Créer un nouveau post</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Contenu" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Catégorie" />
      <button onClick={handleCreatePost}>Publier</button>
    </div>
  );
};

export default Write;