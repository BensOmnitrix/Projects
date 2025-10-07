const { z } = require("zod");

const updateUserSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(50, "First name cannot exceed 50 characters")
    .optional(),

  lastName: z
    .string()
    .trim()
    .max(50, "Last name cannot exceed 50 characters")
    .optional(),

  password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters long"),
});

module.exports = {
    updateUserSchema
}
