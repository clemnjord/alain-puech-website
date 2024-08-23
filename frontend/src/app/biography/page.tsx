"use client"
import React, { useEffect, useState } from 'react';

interface Technique {
    title: string;
    description: string;
}

export default function HomePage() {
    const [technique, setTechnique] = useState<Technique | null>(null);
    const [language, setLanguage] = useState('fr');

    // useEffect(() => {
    //     async function fetchTechnique() {
    //         const res = await fetch(`/api/techniques/1?lang=${language}`);
    //         if (res.ok) {
    //             const data = await res.json();
    //             setTechnique(data);
    //         }
    //     }
    //     fetchTechnique();
    // }, [language]);

    return (
        <p>
            Alain Puech né en 1958 à Marseille.
            BT arts appliqués et DNSEP option art.
            Je suis davantage dessinateur que peintre.
            J’ai exercé dans la publicité comme illustrateur free lance pendant quelques années et à partir de 1985 je me suis consacré entièrement a mon travail artistique.
            J’ai réalisé des œuvres collectives et des commandes publiques avec les groupes Silo et Artstudio.
            J’ai travaillé avec des quantités de techniques différentes ( pastels secs et gras, crayons, encres...).
            Mon travail s’articule autours du corps, de la danse, du portrait.
            Je travaille exclusivement en série. Un« sérial drawer » en quelque sorte.
            Depuis avril 2008 je réalise chaque jour un autoportrait.
            Par ailleurs depuis 2006 je dirige une école municipale d’arts plastiques.
        </p>
    );
}