import '../../Css/Carteira.css'

export default function Carteira(){
    return(
        
        <section className='carteira-content flex-column pt-3'>

            <div className='saldo row mb-5'>

                <div className='col-12 col-md-3 d-flex align-items-center justify-content-end' id='saldo-atual'> 
                     <spam>Saldo disponivel</spam>
                </div>

                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center" id='saldo-valor'>
                    <spam>R$ 398,00</spam>
                </div>

                <div class="col-12 col-md-3 d-flex align-items-center justify-content-center" id='saldo-button'>
                    <button>Resgatar</button>
                </div>
                
            </div>


            <div className='cartao-content row'> 
                <div className='titulo ml-2 mt-2'> 
                    <h5> Meus cartões</h5>
                </div>

                <div className='cartoes col-sm-6 d-flex align-items-center justify-content-center'> 
                    <p> Aqui cartoes </p>
                </div>

                <div className='novo-cartao col-sm-6 d-flex align-items-center justify-content-center '> 
                    <p> Aqui novo </p>
                </div>




            </div>
         
        </section>
    )
}