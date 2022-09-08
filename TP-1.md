# **Exercice 2 : Prise en main de l'interpréteur de commande**

## *Manuel*

1 - La commande which permet de localiser une commande, un binaire.

2 - Lorsque l'on consulte une page du manuel, pour chercher un terme il suffit de saisir la commande "man 

3 - Afin de sortir du manuel, il faut presser la touche 'q'.

4 - La première page de la section 6 concerne les jeux, économiseurs d’écran, gadgets...

## *Navigation dans l’arborescence des fichiers*

1 - Pour aller dans un dossier : "cd [directory]"; ici : "cd /var/log".

2 - Pareil que la question précédente : "cd /var" ou "cd..".

3 - Le retour dans le dossier personnel se fait avec "cd".

4 - Sans utiliser de chemin, pour revenir au dossier précédent, il faut utiliser la commande "cd -"

5 - L'accès au dossier /root est refusé.

6 - La commande "sudo cd /root" ne fonctionne pas. Cela s'explique par le fait que la commande "cd" est intégrée dans le shell tandis que "sudo" ne fonctionne qu'avec les executables.

7 - D'abord la création des deux dossiers : "mkdir Dossier1" et "mkdir Dossier2";
entrer dans le Dossier1 avec "cd Dossier1" puis créer le Fichier1 avec "touch Fichier1";
sortir du Dossier1 avec "cd ..";
entrer dans Dossier2 avec "cd Dossier2" puis créer les deux sous-dossiers : "mkdir Dossier2.1", "mkdir Dossier2.2";
entrer dans Dossier2.2 avec "cd Dossier2.2" puis créer les fichiers : "touch Fichier2.txt", "touch Fichier3.txt".

8 - Avec la commande "rm Dossier1/Fichier1.txt" on peut supprimer le fichier. Nonobstant, supprimer le Dossier1 avec "rm Dossier1" ne fonctionne pas (car c'est un dossier).

9 - Pour supprimer un dossier, il faut alors ajouter l'option -r à la commande : "rm -r Dossier1".

10 - Elle appliquant la commande précédente pour le Dossier2, "rm -r Dossier2", cela va supprimer le Dossier2 y compris tous ses sous-dossiers et fichiers.

11 - (même réponse que la question précédente : "rm -r Dossier2").

## *Commandes importantes*

1 - La commande "date" permet d'afficher la date, y compris l'heure. "time" affiche des informations sur les ressources utilisées par COMMAND.

2 - Les noms des fichiers précédés par un point, peut se traduire par le fait que les fichiers sont des éléments masqués.

3 - La commande ls se trouve ici : /usr/bin/.

4 - Il n'existe aucune entrée de manuel pour cette commande "ll". En effet, cette commande est un alias pour une autre commande : "ls -alF".

5 - Pour afficher le contenu du dossier /bin : "ls /bin".

6 - "ls" liste les fichiers d'un dossier.

7 - Pour avoir le chemin complet du dossier courrant : "pwd".

8 - Création d'un fichier nommé plop avec à l'intérieur écrit bip. La première exécution va créer le fichier et écrire à l'intérieur. La seconde va réécrire le fichier.

9 - A contrario de "echo 'bip' > plop", "echo 'bip' >> plop" va écrire bip à la suite du même fichier sans l'écraser.

10 - Un temps d'attente de 10 secondes va se lancer et 'toto' va s'afficher dans la console.

11 - "file" determine le type d'un fichier (indépendamment de son extension). Elle affiche son contenu.

12 - lien_phy et original contiennent la même chose.