import Article from "./Article";

function ArticleList() {
    const posts = [{
        title : "Основы здорового питания" ,
        text : "Здоровое питание — это баланс белков, жиров и углеводов."+
                "Употребляй больше овощей, цельнозерновых продуктов и пей достаточно воды. "+
                "Это поможет сохранить энергию и хорошее самочувствие." ,
    },
    {
        title : "Минимализм в повседневной жизни" ,
        text : "Минимализм — это отказ от лишнего в пользу простоты. Меньше вещей, "+
                "больше пространства и свободы. Начни с расхламления дома и осознанного потребления." ,
    },
    {
        title : "Почему важно высыпаться" ,
        text : "Сон влияет на концентрацию, память и здоровье. Недостаток сна снижает продуктивность "+
                "и может привести к болезням. Постарайся спать 7-9 часов в день, и ты почувствуешь разницу!" ,
    },
    {
        title : "Влияние музыки на настроение" ,
        text : "Музыка способна вдохновлять, успокаивать или придавать энергию. Быстрая ритмичная музыка "+
                "повышает мотивацию, а спокойные мелодии помогают расслабиться и снизить стресс." ,
    }
];

    return (
        <>
            {posts.map((spost)=>(
                <Article post = {spost}/>
            ))}
        </>
    );
   }

export default ArticleList;