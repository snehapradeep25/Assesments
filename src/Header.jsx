function Header(){
    return(
        <div style={{display:'flex',
            justifyContent:"space-between",
            alignItems:'center',
            backgroundImage:'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2ojE5xTtdPOBHdWbycO-PqbYSqaMfH_HOA&s)',backgroundAttachment:'fixed',backgroundPosition:'centre',backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
        }}>
            <h1 style={{fontFamily:'cursive',
                paddingLeft:"10px"
            }}>
                ShopWave
            </h1>
            <h3 style={{fontFamily:'cursive',
                paddingTop:'20px'
            }}>
                Discover quality that speaks for itself!
            </h3>
            <a href="/AddProducts" style={{fontFamily:'cursive',fontSize:'25px',
                paddingRight:"10px"
            }}>
            Add products
            </a>
        </div>
    )
}export default Header;