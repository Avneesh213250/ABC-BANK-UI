PGDMP     3                    x            FSD_DB    9.6.17    9.6.17 -    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �           1262    57344    FSD_DB    DATABASE     �   CREATE DATABASE "FSD_DB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "FSD_DB";
             postgres    false                        2615    57353    master    SCHEMA        CREATE SCHEMA master;
    DROP SCHEMA master;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12387    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            �           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    65540 
   sales_type    TABLE     a   CREATE TABLE master.sales_type (
    id bigint NOT NULL,
    sales_type character varying(20)
);
    DROP TABLE master.sales_type;
       master         postgres    false    5            �            1259    57370    status    TABLE     ^   CREATE TABLE master.status (
    id bigint NOT NULL,
    status character varying NOT NULL
);
    DROP TABLE master.status;
       master         postgres    false    5            �            1259    57378 	   user_type    TABLE     `   CREATE TABLE master.user_type (
    id integer NOT NULL,
    type character varying NOT NULL
);
    DROP TABLE master.user_type;
       master         postgres    false    5            �            1259    65627    cr    SEQUENCE     m   CREATE SEQUENCE public.cr
    START WITH 201
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.cr;
       public       postgres    false    3            �            1259    65588    credit_card    TABLE     �   CREATE TABLE public.credit_card (
    credit_id bigint NOT NULL,
    credit_card_num bigint,
    validity timestamp without time zone
);
    DROP TABLE public.credit_card;
       public         postgres    false    3            �            1259    73738    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public       postgres    false    3            �            1259    65629    ins    SEQUENCE     n   CREATE SEQUENCE public.ins
    START WITH 301
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.ins;
       public       postgres    false    3            �            1259    65593 	   insurence    TABLE     �   CREATE TABLE public.insurence (
    insurence_id bigint NOT NULL,
    insurence character varying(255),
    matuity_date timestamp without time zone,
    policy character varying(255)
);
    DROP TABLE public.insurence;
       public         postgres    false    3            �            1259    73728    officer    SEQUENCE     t   CREATE SEQUENCE public.officer
    START WITH 20326
    INCREMENT BY 6
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.officer;
       public       postgres    false    3            �            1259    73730    officer_table    TABLE        CREATE TABLE public.officer_table (
    officer_id integer NOT NULL,
    branch_id character varying(255),
    address character varying(255),
    email character varying(255),
    name character varying(255),
    phone_number character varying(255),
    status character varying(255)
);
 !   DROP TABLE public.officer_table;
       public         postgres    false    3            �            1259    65625    sa    SEQUENCE     l   CREATE SEQUENCE public.sa
    START WITH 101
    INCREMENT BY 1
    MINVALUE 0
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.sa;
       public       postgres    false    3            �            1259    65601    sales_entry    TABLE     6  CREATE TABLE public.sales_entry (
    id integer NOT NULL,
    created_by character varying(255),
    created_date timestamp without time zone,
    customername character varying(255),
    sales_id integer NOT NULL,
    credit_card_credit_id bigint,
    insurence_insurence_id bigint,
    officerid integer
);
    DROP TABLE public.sales_entry;
       public         postgres    false    3            �            1259    73748 
   user_login    TABLE     �   CREATE TABLE public.user_login (
    userid integer NOT NULL,
    password character varying(255),
    usertype character varying(255)
);
    DROP TABLE public.user_login;
       public         postgres    false    3            �          0    65540 
   sales_type 
   TABLE DATA               4   COPY master.sales_type (id, sales_type) FROM stdin;
    master       postgres    false    188   :.       �          0    57370    status 
   TABLE DATA               ,   COPY master.status (id, status) FROM stdin;
    master       postgres    false    186   p.       �          0    57378 	   user_type 
   TABLE DATA               -   COPY master.user_type (id, type) FROM stdin;
    master       postgres    false    187   �.       �           0    0    cr    SEQUENCE SET     2   SELECT pg_catalog.setval('public.cr', 232, true);
            public       postgres    false    193            �          0    65588    credit_card 
   TABLE DATA               K   COPY public.credit_card (credit_id, credit_card_num, validity) FROM stdin;
    public       postgres    false    189   �.       �           0    0    hibernate_sequence    SEQUENCE SET     A   SELECT pg_catalog.setval('public.hibernate_sequence', 1, false);
            public       postgres    false    197            �           0    0    ins    SEQUENCE SET     3   SELECT pg_catalog.setval('public.ins', 327, true);
            public       postgres    false    194            �          0    65593 	   insurence 
   TABLE DATA               R   COPY public.insurence (insurence_id, insurence, matuity_date, policy) FROM stdin;
    public       postgres    false    190   �/       �           0    0    officer    SEQUENCE SET     9   SELECT pg_catalog.setval('public.officer', 20332, true);
            public       postgres    false    195            �          0    73730    officer_table 
   TABLE DATA               j   COPY public.officer_table (officer_id, branch_id, address, email, name, phone_number, status) FROM stdin;
    public       postgres    false    196   �0       �           0    0    sa    SEQUENCE SET     2   SELECT pg_catalog.setval('public.sa', 159, true);
            public       postgres    false    192            �          0    65601    sales_entry 
   TABLE DATA               �   COPY public.sales_entry (id, created_by, created_date, customername, sales_id, credit_card_credit_id, insurence_insurence_id, officerid) FROM stdin;
    public       postgres    false    191   �1       �          0    73748 
   user_login 
   TABLE DATA               @   COPY public.user_login (userid, password, usertype) FROM stdin;
    public       postgres    false    198   �2                  2606    65544    sales_type sales_type_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY master.sales_type
    ADD CONSTRAINT sales_type_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY master.sales_type DROP CONSTRAINT sales_type_pkey;
       master         postgres    false    188    188            �           2606    57377    status status_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY master.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY master.status DROP CONSTRAINT status_pkey;
       master         postgres    false    186    186            �           2606    57385    user_type user_type_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY master.user_type
    ADD CONSTRAINT user_type_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY master.user_type DROP CONSTRAINT user_type_pkey;
       master         postgres    false    187    187                       2606    65592    credit_card credit_card_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.credit_card
    ADD CONSTRAINT credit_card_pkey PRIMARY KEY (credit_id);
 F   ALTER TABLE ONLY public.credit_card DROP CONSTRAINT credit_card_pkey;
       public         postgres    false    189    189                       2606    65600    insurence insurence_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.insurence
    ADD CONSTRAINT insurence_pkey PRIMARY KEY (insurence_id);
 B   ALTER TABLE ONLY public.insurence DROP CONSTRAINT insurence_pkey;
       public         postgres    false    190    190            	           2606    73737     officer_table officer_table_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.officer_table
    ADD CONSTRAINT officer_table_pkey PRIMARY KEY (officer_id);
 J   ALTER TABLE ONLY public.officer_table DROP CONSTRAINT officer_table_pkey;
       public         postgres    false    196    196                       2606    65608    sales_entry sales_entry_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.sales_entry
    ADD CONSTRAINT sales_entry_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.sales_entry DROP CONSTRAINT sales_entry_pkey;
       public         postgres    false    191    191                       2606    73755    user_login user_login_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.user_login
    ADD CONSTRAINT user_login_pkey PRIMARY KEY (userid);
 D   ALTER TABLE ONLY public.user_login DROP CONSTRAINT user_login_pkey;
       public         postgres    false    198    198                       2606    65619 &   sales_entry fkbwrn7mqjqty05p7u8prc2gje    FK CONSTRAINT     �   ALTER TABLE ONLY public.sales_entry
    ADD CONSTRAINT fkbwrn7mqjqty05p7u8prc2gje FOREIGN KEY (insurence_insurence_id) REFERENCES public.insurence(insurence_id);
 P   ALTER TABLE ONLY public.sales_entry DROP CONSTRAINT fkbwrn7mqjqty05p7u8prc2gje;
       public       postgres    false    2053    191    190                       2606    65614 '   sales_entry fkclg8m6vlmlwpyd0j91sqws4wb    FK CONSTRAINT     �   ALTER TABLE ONLY public.sales_entry
    ADD CONSTRAINT fkclg8m6vlmlwpyd0j91sqws4wb FOREIGN KEY (credit_card_credit_id) REFERENCES public.credit_card(credit_id);
 Q   ALTER TABLE ONLY public.sales_entry DROP CONSTRAINT fkclg8m6vlmlwpyd0j91sqws4wb;
       public       postgres    false    191    189    2051            �   &   x�3���+.-J�KN�2�t.JM�,qN,J����� �V�      �   F   x�3�t,.�L�KM�2���(�O/J-.�2�t��-�I-J�p��BX����%�e�\f��9��@�=... ���      �   #   x�340�tL����240��OK�LN-����� _��      �   �   x����� �g��؃јY����!iZU��ND�G.Q���*����-B�N �$33H	w�7'i�؄������*^,CQG<2
�p?8Ht9B�O��t���E.%
-���qJ��FNC�m��R��I(�l�}7�~_E��B5��ߔs{�\,[>��=Cow���      �     x���KN�0D��)r�n��c��3���P��0��2��0"V��uWٝr��7oB�&E�b��;:	�HC�x��D ���6Fڬ��(P���Ň(}�2�(�ǌ��bV:_�I�D0��kg0ֱ�o���2t5
T!|�c�G�QT�B�t�+��o�73ex��7�0��-���I����G��^B�����z���c�p��*����l��gl(�;!�8費.إ������q��U��D�}�CL�[��A�����$ɗ)�&��      �   �   x��ϱ
�0�9y�<AМ-�v�TJ]]NI(FHB��oLK�R���8���#�n���)�I�R^�V;����e��ɇy�y�)y@E�!���(�(��d,Ï��U癹����PR.D@��Ɓӯ3����K�9k4Zv��,I"} -�B⏢-�s�CvǾ_�
a���qJ�d�      �   �   x�}��j�@���xs�Üw%]��l�����ZP+��3�F��0����?�V��mU����]3�~H�  8�;��h���)A������$��`��/�-��!�$BQ+�+	b����i'�*�ǆ@�L��^-��	}D��ʻm����Ԝ�Ԗ]��~��0��0R�`��^5z���厖!�&f�����2~����xE뻖���	��%�:(�q�L�TQO��1      �   9   x�32066�,I-.��OK�LN-�2
Y`r�cJnfH��" S���� S�1     