import styled from 'styled-components'

export const Container = styled.div `

padding: 4rem 0;

h1 {
    margin: 3rem 0;

}

.movie {
    display: flex;
    align-items: center;
    justify-content: center
}

@media (max-width: 769px){
   .movie {
    flex-direction: column;
   }  
   
   .details {
    max-width: 100% !important;
    margin-left: 0 !important;
   }
}

img {
    width: 300px;
    border-radius: 1rem;
}

.details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    
    max-width: 50%
}

button {
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s
}

button:hover {
    background: #5848c2
}


span {
    font-weight: 300;
    line-height: 1.5rem;
    margin-bottom: 1rem
}

.releaseDate {
    opacity: 0.5 
}
`