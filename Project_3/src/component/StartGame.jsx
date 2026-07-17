import styled from 'styled-components'

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
      <img src="public\dices 1.png" alt="" />

      </div>

      <div className='content'>
        <h1 >Dice Game</h1>
        <Button onClick={toggle}> Play Now</Button>
      </div>

    </Container>
  )
}

export default StartGame

const Container = styled.div`
// max-width:1180px;
height:100vh;
// background-Color:red;
display:flex;
align-items: center;
justify-content:center;

.content {
  h1{
  font-size:93px;
  
  }
}
`
const Button = styled.button`
background-color:black;
padding:10px 20px;
border:none;
color:white;
font-size:20px;
border-Radius:10px;
float:right;


&:hover{
scale:1.01;
cursor:pointer;

}
`