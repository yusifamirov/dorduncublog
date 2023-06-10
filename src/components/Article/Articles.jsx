import React from 'react';
import { useParams } from 'react-router-dom';
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import Article4 from './Article4';
import Article5 from './Article5';
import Article6 from './Article6';
import Article7 from './Article7';
import Article8 from './Article8';

const Articles = () => {
  const params = useParams();
  let component = <>Articles</>;
  switch(parseInt(params.id)) {
    case 1: component = <Article1 />; break;
    case 2: component = <Article2 />; break;
    case 3: component = <Article3 />; break;
    case 4: component = <Article4 />; break;
    case 5: component = <Article5 />; break;
    case 6: component = <Article6 />; break;
    case 7: component = <Article7 />; break;
    case 8: component = <Article8 />; break;
  }
  console.log(params.id)
  console.log(component)
  return (
    <section className="article">
      {component}
    </section>
  );
};

export default Articles;
