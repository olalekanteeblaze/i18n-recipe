import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './RecipeCard.module.scss';

const RecipeCard = ({ recipe }) => {
    const { t, i18n } = useTranslation('translations')
    console.log(i18n, t)
    return (
        <div className={classes.container}>
            <div className={classes.img__container}>
                <img 
                    src={recipe.imageUrl}
                    alt={t(recipe.name)}
                />
                <h3>{t(recipe.name)}</h3>
            </div>
            <div className={classes.recipe}>
                <div>
                    <h2>{t('instructions')}</h2>
                    <ul>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{t(instruction)}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>{t('ingredients')}</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{t(ingredient)}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default RecipeCard;
