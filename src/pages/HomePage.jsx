import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const HomePage = ({ products }) => {
  // Se houver menos de 3 produtos, exiba todos os produtos
  const carouselProducts = products.slice(0, 9);

  return (
    <div>
      <h1>Bem Vindo Á Epic Media Store</h1>
      <p>"Seu Refúgio de Cultura e Diversão"</p>
      <p>Sobre Nós
Epic Media Store foi fundada em 2024 com uma missão clara: proporcionar aos amantes de livros, filmes e séries um espaço único onde possam encontrar e se conectar com suas histórias favoritas. Localizada no coração da cidade, nossa loja é um refúgio para aqueles que buscam uma experiência de entretenimento completa.

A ideia de criar a Epic Media Store nasceu da paixão de seus fundadores, Kaio Meireles, um ávido leitor e cinéfilo, e Kaio Meireles, um entusiasta de séries e cultura pop. Juntos, eles visualizaram um espaço onde cada visitante pudesse mergulhar em um mundo de imaginação e descobertas, independentemente de sua preferência por um bom livro, um filme emocionante ou uma série envolvente.

Nossa loja oferece uma seleção cuidadosamente curada de produtos, desde best-sellers e clássicos literários até os mais recentes lançamentos de filmes e séries. Além disso, nosso compromisso com a qualidade nos leva a oferecer apenas produtos autênticos e de alta qualidade, garantindo que cada compra feita em nossa loja seja uma experiência satisfatória e enriquecedora.

Na Epic Media Store, acreditamos que cada história tem o poder de transformar, inspirar e entreter. É por isso que nos dedicamos a fornecer não apenas produtos, mas experiências memoráveis. Nosso espaço é acolhedor e convidativo, perfeito para explorar novas paixões ou redescobrir velhos favoritos.

Nossa equipe é composta por verdadeiros entusiastas do entretenimento, sempre prontos para oferecer recomendações personalizadas e compartilhar sua paixão com nossos clientes. Seja você um leitor ávido, um cinéfilo dedicado ou um fã de séries, a Epic Media Store é o lugar ideal para encontrar o que você ama.

Venha nos visitar e descubra por que a Epic Media Store é mais do que uma loja – é o seu portal para o entretenimento épico.

</p>
      <Carousel>
        {carouselProducts.map(product => (
          <Carousel.Item key={product.id}>
            <ProductCard product={product} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomePage;
