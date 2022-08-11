import { celebrate, Joi, Segments } from "celebrate";
Joi.objectId = require("joi-objectid")(Joi);

const movieValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    rate: Joi.number().required(),
    Image: Joi.string().required(),
    category: Joi.objectId().required(),
  }),
});

export default movieValidation;
