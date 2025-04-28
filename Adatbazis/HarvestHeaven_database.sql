CREATE TABLE felhasznalok(
    id int,
    nev varchar(50),
    adoszam varchar(50),
    telefonszam varchar(50),
    jelszo varchar(50),
    felhasznaloTipus varchar(50),
    CONSTRAINT pk_felhasznalo PRIMARY KEY (id)
);

CREATE TABLE termekek(
    id int,
    termek_nev varchar(50),
    ar int,
    kategoria varchar(50),
    szarmazasi_orszag varchar(50),
    minoseg int,
    kep varchar(1000),
    CONSTRAINT pk_termek PRIMARY KEY (id)
);

CREATE TABLE hirdetesek(
    id int,
    felhasznaloId int,
    termekId int,
    termek_egysege varchar(50),
    termek_mennyiseg int,
    brutto_egysegar int,
    netto_egysegar int,
    leiras varchar(200),
    letrehozasdatuma varchar(50),
    CONSTRAINT pk_hirdetes PRIMARY KEY(id),
    CONSTRAINT fk_felhasznalom FOREIGN KEY (felhasznaloId) REFERENCES felhasznalok(id),
    CONSTRAINT fk_termekm FOREIGN KEY (termekId) REFERENCES termekek(id)
);

CREATE TABLE rendelesek(
    id int,
    rendeles_ideje varchar(50),
    eladoId int,
    vasarloId int,
    hirdetesId int,
    termekId int,
    CONSTRAINT pk_rendeles PRIMARY KEY(id),
    CONSTRAINT fk_eladofk FOREIGN KEY (eladoId) REFERENCES felhasznalok(id),
    CONSTRAINT fk_termekfk FOREIGN KEY (termekId) REFERENCES termekek(id)
);

INSERT INTO felhasznalok VALUES
(1,'Kiss Pista','748764','+36563856385','kp1invvbn','eladó'),
(2,'Almakorte.kft','87548753','+36793669376','48u9ge','mindkettő'),
(3,'Fekete Aranka','73457','+36966312956','uihvf78ew','vasarló'),
(4,'Lakatos Ernő','7455378','+36275638663','jknbt4','mindkettő'),
(5,'lajosbarack.kft','94676345','+36872656963','ngre75dx','eladó'),
(6,'Karakán Károly','8745875','+36727552758','nkjsrj874','eladó'),
(7,'Szabó Szilárd','7765464','+3693766739','knjnver567','vásárló'),
(8,'Kormos Ubul','78356235','+368265822154','k7z1bh0','mindkettő'),
(9,'Zajos Zalán','8945678654','+36113322445',' jweui0','vásárló'),
(10,'Arnold','84957663456','+36192837465','mnuncu4fn','mindkettő');


INSERT INTO termekek VALUES
(1,'Alma',220,'Gyümölcs','Lengyelország',1, 'ALMA.jpg'),
(2,'Körte',320,'Gyümölcs','Magyarország',2, 'körte.jpg'),
(3,'Saláta',350,'Zöldség','Marokkó',1,'salata.jpg'),
(4, 'Banán',600, 'Gyümölcs', 'Ecuador', 2, 'BANÁN.jpg'),
(5, 'Szőlő',370, 'Gyümölcs', 'Olaszország', 1,'SZŐLŐ.jpg'),
(6, 'Paradicsom',380, 'Zöldség', 'Spanyolország', 2, 'PARADICSOM.jpg'),
(7, 'Uborka',370, 'Zöldség', 'Hollandia', 1, 'UBORKA.jpg'),
(8, 'Eper',760, 'Gyümölcs', 'Magyarország', 3,'EPER.jpg'),
(9, 'Répa',450,'Zöldség', 'Ausztria', 1,'RÉPA.jpg'),
(10, 'Barack',590, 'Gyümölcs', 'Görögország', 2,'BARACK.jpg'),
(11, 'Brokkoli',900, 'Zöldség', 'Franciaország', 1,'BROKKOLI.jpg'),
(12, 'Szőlő',399, 'Gyümölcs', 'Olaszország', 2,'SZŐLŐ.jpg'),
(13, 'Narancs',560, 'Gyümölcs', 'Spanyolország', 2,'NARANCS.JPG'),
(14, 'Mandarin',690, 'Gyümölcs', 'Törökország', 1, 'MANDARIN.jpg'),
(15, 'Görögdinnye',280, 'Gyümölcs', 'Görögország', 3,'DIYNE.jpg'),
(16, 'Sárgabarack',300, 'Gyümölcs', 'Olaszország', 2,'SÁRGABARECK.jpg'),
(17, 'Füge',550, 'Gyümölcs', 'Törökország', 1,'FÜGE.jpg'),
(18, 'Granátalma',650, 'Gyümölcs', 'Izrael', 3,'Gránátalma.jpg'),
(19, 'Paprika',540, 'Zöldség', 'Magyarország', 2,'PAPRIKA.jpg'),
(20, 'Lilahagyma',460, 'Zöldség', 'Hollandia', 1,'LILAHAGYMA.jpg'),
(21, 'Spárga',320, 'Zöldség', 'Németország', 3,'SPÁRGA.jpg'),
(22, 'Kukorica',299, 'Zöldség', 'Románia', 1,'KUKORICA.jpg'),
(23, 'Padlizsán',499, 'Zöldség', 'Olaszország', 2,'PADLI.jpg'),
(24, 'Zöldborsó',340, 'Zöldség', 'Belgium', 1,'ZÖLDBORSO.png'),
(25, 'Burgonya',210, 'Zöldség', 'Magyarország', 1,'burgonya.png'),
(26, 'Hagyma',240, 'Zöldség', 'Lengyelország', 1,'HAGYMA.jpg'),
(27, 'Fokhagyma',690, 'Zöldség', 'Kína', 2,'fokhagyma-1-fej-uj_1674314766.jpg'),
(28, 'Gyömbér',750, 'Zöldség', 'India', 3,'gyomber.jpg'),
(29, 'Kivi',450, 'Gyümölcs', 'Új-Zéland', 2,'KIVI.jpg'),
(30, 'Ananász',890, 'Gyümölcs', 'Costa Rica', 1,'ANANÁSZ.jpg');

INSERT INTO hirdetesek VALUES
(1,3,2,'kilogramm',50,200,146,'Eladó 2 napja betermelt alma.','2024.11.22.');

INSERT INTO rendelesek VALUES
(1,'2025.01.28.',3,2,6,2),
(2,'2023.05.29.',8,9,4,3),
(3,'2024.12.02.',7,6,5,2),
(4,'2024.11.23.',2,3,2,1);