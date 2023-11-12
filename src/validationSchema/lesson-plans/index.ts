import * as yup from 'yup';

export const lessonPlanValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  subject: yup.string().required(),
  grade_level: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
