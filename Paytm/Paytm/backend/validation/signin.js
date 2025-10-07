const { z } = require("zod");

const signinSchema = z.object({
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(3, "Username must be at least 3 characters long")
    .max(30, "Username cannot exceed 30 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),

  password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters long"),
});

module.exports = { signinSchema };
