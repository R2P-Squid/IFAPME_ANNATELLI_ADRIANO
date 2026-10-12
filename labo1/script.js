let panier = [];

// Recuperation des element HTML

const boutonsAjouter = document.querySelectorAll(".ajouter-panier");
const contenuPanier = document.getElementById("contenu-panier");
const total = document.getElementById("total");
const nombrePanier = document.getElementById("nombre-panier");
const ouvrirPanier = document.getElementById("ouvrir-panier");
const fermerPanier = document.getElementById("fermer-panier");
const fondPanier = document.getElementById("fond-panier");
const boutonPaiement = document.getElementById("paiement");
const fondPaiement = document.getElementById("fond-paiement");
const fermerPaiement = document.getElementById("fermer-paiement");
const payer = document.getElementById("payer");

//Ajouter un jeu au panier

boutonsAjouter.forEach(function(bouton)
{
    bouton.addEventListener("click",function()
    {
        const nom = bouton.dataset.nom;
        const prix = Number(bouton.dataset.prix);

        panier.push
        ({
            nom : nom,
            prix : prix,
        });

        afficherPanier();

    })

})

// afficher panier

function afficherPanier()
{
    contenuPanier.innerHTML = "";
    let prixTotal = 0;

    panier.forEach(function(jeu,index)
    {
        prixTotal += jeu.prix;

        const produit = document.createElement("div");
        produit.classList.add("produit-panier");

        produit.innerHTML =`<span>${jeu.nom} - ${jeu.prix.toFixed(2)} €</span> 
        <button onclick="supprimerJeu(${index})"> Supprimer </button>`;

        contenuPanier.appendChild(produit);

    });
    total.textContent = prixTotal.toFixed(2);
    nombrePanier.textContent = panier.length;
}

// supprimer un jeu 

function supprimerJeu(index)
{
    panier.splice(index,1);
    afficherPanier();

}

//ouvrir le panier

ouvrirPanier.addEventListener("click", function()
{
    fondPanier.classList.remove("cache");

});

// fermer le panier

fermerPanier.addEventListener("click", function()
{
    fondPanier.classList.add("cache");

});

// aller au paiement

boutonPaiement.addEventListener("click", function()
{
    if (panier.length === 0)
    {
        alert("votre panier est vide !");
        
        return;
    }

    fondPanier.classList.add("cache");
    fondPaiement.classList.remove("cache");

});

// fermer le paiement 

fermerPaiement.addEventListener("click", function()
{
    fondPaiement.classList.add("cache");
});

// effectuer le paiement 

payer.addEventListener("click", function()
{
    alert("Paiement effectué avec succès ! Merci pour votre achat.");

    panier = [];

    afficherPanier();
    fondPaiement.classList.add("cache");

});