// Fonction pour ajouter un produit au panier et mettre à jour le total
function ajouterPanier(nomProduit, prixProduit) {
  // Récupérer le panier depuis localStorage ou créer un tableau vide
  let panier = JSON.parse(localStorage.getItem('panier')) || [];

  // Vérifier si le produit est déjà dans le panier
  let produitExiste = panier.find(item => item.nom === nomProduit);

  if (produitExiste) {
    produitExiste.quantite += 1; // augmenter la quantité
  } else {
    panier.push({ nom: nomProduit, prix: prixProduit, quantite: 1 });
  }

  // Enregistrer le panier mis à jour dans localStorage
  localStorage.setItem('panier', JSON.stringify(panier));

  // Mettre à jour l'affichage du total
  miseAJourTotal();

  alert(nomProduit + " ajouté au panier !");
}

// Fonction pour calculer et afficher le total
function miseAJourTotal() {
  let panier = JSON.parse(localStorage.getItem('panier')) || [];
  let total = 0;

  panier.forEach(item => {
    total += item.prix * item.quantite;
  });

  document.getElementById('totalPrix').textContent = total.toFixed(2);
}

// Fonction pour vider le panier et réinitialiser le total
function resetTotal() {
  if (confirm("Voulez-vous vraiment réinitialiser le panier ?")) {
    localStorage.removeItem('panier');
    miseAJourTotal();
    alert("Panier réinitialisé.");
  }
}

// Fonction pour aller à la page du panier
function voirPanier() {
  window.location.href = "panier.html";
}

// Mettre à jour le total au chargement de la page
window.onload = miseAJourTotal;
