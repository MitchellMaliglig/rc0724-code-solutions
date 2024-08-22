import './App.css';
import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';

export function App() {
  return (
    <>
      <Header></Header>
      <ImageContainer></ImageContainer>
      <ImageCaption></ImageCaption>
      <ImageDescription></ImageDescription>
      <ButtonContainer></ButtonContainer>
    </>
  );
}
