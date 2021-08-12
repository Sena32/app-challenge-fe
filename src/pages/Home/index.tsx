/* eslint-disable jsx-a11y/alt-text */
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import CardImg from '../../components/Card/CardImg';
import { Spinner } from '../../components/Spinner/styles';
import { ApplicationState } from '../../store';
import { loadRequest } from '../../store/ducks/clients/actions';
// import SlideShow from "../../components/slideShow";
import { CardWrapper, Container, HeadBarTitle, Title, Wrapper } from './styles';


const Home: React.FC = () => {
  const dispatch = useDispatch();
  const {data, error, loading} = useSelector((state: ApplicationState) => state.books); 

  const topBooks = data && data.filter(book=>book.top === true);
  const mainBooks = data && data.filter(book=>book.image_url !== undefined && book.image_url.length>0);
  
  
  useEffect(() => {
    dispatch(loadRequest())
  }, []);


  useEffect(()=>{

    if(error){
      const message  = 'Oops algo deu errado';
      // notifyError(message);
      console.log(message);
      alert(message);
    }
  }, [error])


 return (
   <>

   <Container>
    <Wrapper>
      <Title>
        Livros em Destaque
      </Title>
     {/* <SwipeableTextMobileStepper key='id' datas={
       topBooks.map(
         book=>{ 
           return({label: book.name, imgPath: book.image_url})
           })}
      /> */}
      {/* <SlideShow
        interval={3000}
        datas={
          topBooks.map(
            book=>{ 
              return({te_id: book.name, e_image_url: book.image_url})
              })}
      /> */}
    </Wrapper>


    {loading ?(<Spinner/>): mainBooks.map(book=>(
      <CardWrapper key={String(book.id)}>
        <CardImg>
          {book.image_url ? (<img src={book.image_url}/>) : (<MenuBookTwoToneIcon/>)}
        </CardImg>
        <Card>
          <Title>{book.name}</Title>
          <HeadBarTitle>
              <span>{`${book.description}`}</span>
          </HeadBarTitle>
        </Card>
      </CardWrapper>
    ))}
   </Container>
   </>
   
 );
};

export default Home;