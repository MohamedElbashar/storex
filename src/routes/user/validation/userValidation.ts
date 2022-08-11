import { celebrate, Joi, Segments } from "celebrate";

const userValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    BirthDate: Joi.date().required(),
  }),
});

export default userValidation;
