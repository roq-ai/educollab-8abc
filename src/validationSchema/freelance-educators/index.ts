import * as yup from 'yup';

export const freelanceEducatorValidationSchema = yup.object().shape({
  expertise: yup.string().required(),
  experience_years: yup.number().integer().required(),
  education_level: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
