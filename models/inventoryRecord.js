module.exports = function (sequelize, DataTypes) {
    var InventoryRecord = sequelize.define("InventoryRecord", {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        store_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        store_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        local_price: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
        {
            timestamps: false // prevent autogenerated timestamp attributes (updatedAt, createdAt)
        }
    );
    return InventoryRecord;
};
