import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-white py-4 text-center text-xs">
            <hr className="w-full max-w-sm h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
            <p>Toutes les œuvres représentées sont protégées par les droits d’auteurs de la S.A.I.F (Société d’Auteurs
                d’Image Fixe) Paris. France.</p>
        </footer>
    );
};

export default Footer;