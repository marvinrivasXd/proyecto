PGDMP          
        	    {            proyecto    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16399    proyecto    DATABASE     {   CREATE DATABASE proyecto WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE proyecto;
                postgres    false            �            1259    16401    pokemon    TABLE     }   CREATE TABLE public.pokemon (
    id bigint NOT NULL,
    nombre text,
    tipo text,
    evolucion text,
    status text
);
    DROP TABLE public.pokemon;
       public         heap    postgres    false            �            1259    16400    pokemon_id_seq    SEQUENCE     w   CREATE SEQUENCE public.pokemon_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.pokemon_id_seq;
       public          postgres    false    216            �           0    0    pokemon_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.pokemon_id_seq OWNED BY public.pokemon.id;
          public          postgres    false    215                       2604    16404 
   pokemon id    DEFAULT     h   ALTER TABLE ONLY public.pokemon ALTER COLUMN id SET DEFAULT nextval('public.pokemon_id_seq'::regclass);
 9   ALTER TABLE public.pokemon ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16401    pokemon 
   TABLE DATA           F   COPY public.pokemon (id, nombre, tipo, evolucion, status) FROM stdin;
    public          postgres    false    216   d
       �           0    0    pokemon_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.pokemon_id_seq', 7, true);
          public          postgres    false    215                       2606    16408    pokemon pokemon_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.pokemon DROP CONSTRAINT pokemon_pkey;
       public            postgres    false    216            �   ,   x�3�,��NL�(�L�IM.)�L��LLJ�LL.�,������ ��S     