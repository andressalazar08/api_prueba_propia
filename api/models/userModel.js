module.exports= (sequelize, DataTypes)=>{

    const UserModel = sequelize.define('UserModel',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allownull:false
        },
        name:{
            type: DataTypes.STRING
        },
        username:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        phone:{
            type: DataTypes.STRING
        },
        website:{
            type:DataTypes.STRING
        }
    },
    {timestamps:true},
    {paranoid:true}

    )

    return UserModel

}

