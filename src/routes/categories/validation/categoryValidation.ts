import { celebrate, Joi, Segments } from "celebrate";

const CategoryValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
  }),
});

export default categoryValidation;
