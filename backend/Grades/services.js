const {
    Questions
} = require('../data');

//nota    test_id user_id raspuns intrebare
const add = async (nota, test_id, user_id, raspuns, intrebare) => {
        const grade = new Grades({
        nota,
        test_id,
        user_id,
        raspuns,
        intrebare
    });
    await grade.save();
};

const calcul_nota = async (raspuns, intrebare) => {
        let nota_calculata = 0;
        for (let i=0; i<=intrebare.length; i++)
        {
            let question = await Questions.findById(intrebare[i]);
            if (question.raspuns_corect === raspuns[i]){
                nota_calculata++;
            }
        }
        nota_calculata = ((nota_calculata*1.00) / intrebare.length)*10;
        return nota_calculata;
};

const get_grades = async (user_id) =>{
    await Grades.find({user_id:user_id}).populate('test_id');
};

const get_grades_profesor = async (test_id) =>{
    await Grades.find({test_id:test_id}).populate('user_id');
};

module.exports = {
    add,
    calcul_nota,
    get_grades,
    get_grades_profesor
}