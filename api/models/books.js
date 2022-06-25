import { Sequelize } from "sequelize";

export default (sequelize)=>{

    class Book extends Sequelize.Model{}

    Book.init({

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull:{
                    msg: 'Name can not be null!'
                },
                notEmpty:{
                    msg: 'Name can not be empty!'
                },
            },
        },

        author:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull:{
                    msg: 'Author can not be null!'
                },
                notEmpty:{
                    msg: 'Author can not be empty!'
                },
            },
        },

        genre:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull:{
                    msg: 'Genre can not be null!'
                },
                notEmpty:{
                    msg: 'Genre can not be empty!'
                },
            },
        },

        year:{
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull:{
                    msg: 'Year can not be null!'
                },
                notEmpty:{
                    msg: 'Year can not be empty!'
                },
            },
        },

        stock:{
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull:{
                    msg: 'Stock can not be null!'
                },
                notEmpty:{
                    msg: 'Stock can not be empty!'
                },
            },
        }
    }, {
         sequelize,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

    return Book;
}