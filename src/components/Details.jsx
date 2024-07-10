import {Link, useParams} from "react-router-dom";
import {produits} from "../data/produits";

function Details({panier, setPanier}) {
    const {id} = useParams();
    const produit = produits.find((elt) => elt.id === Number(id));
    const addToPanier = () => {
        const produitInPanier = panier.find((item) => item.produit.id === produit.id);
        if (produitInPanier) {
            const panierSansProduit = panier.filter((item) => item.produit.id !== produit.id);
            const newPanier = [...panierSansProduit, {produit, qte: produitInPanier.qte + 1}];
            setPanier(newPanier);
        } else {
            const newPanier = [...panier, {produit, qte: 1}];
            setPanier(newPanier);
        }
    };

    return (
        <main>
            <div id="details-photo">
                <img
                    src={require(`../img/products/${produit.photo}`)}
                    alt="Pollo bleu"
                />
            </div>
            <div id="details-droite">
                <div id="details-nom-cat-prix">
                    <div id="details-nom-cat">
                        <h2>{produit.nom}</h2>
                        <span>{produit.categorie}</span>
                    </div>
                    <div id="details-prix">
                        <span>{produit.prix}</span> F CFA
                    </div>
                </div>
                <div id="details-description">{produit.description}</div>
                <div id="details-boutons">
                    <button className="like-btn">Liker</button>
                    <Link to={'/'} className="like-btn">Retour</Link>
                    <button className="ajout-panier-btn" onClick={addToPanier}>
                        +Panier
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Details;
