import { DataTypes, Model } from 'sequelize';
import db from '../config/sqlite';

interface ProductAttributes {
    id: string;
    name: string;
    category_code: string;
    type: string;
    qty: string;
    sku: string;
}

export class ProductInstance extends Model<ProductAttributes> { }

ProductInstance.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_code: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false
    },
    qty: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false
        ,
    },
    sku: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize: db,
    tableName: 'products',
});