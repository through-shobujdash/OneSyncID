import axiosInstance from "@/lib/axiosInstance";

// ✅ Login Function
export const verifyUser = async (email, otp) => {
  try {
    const {data} = await axiosInstance.post("/user/verify-otp", {
      email,
      otp,
    });
    return data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

// ✅ Signup Function
export const createUser = async (formData) => {
  try {
    const { data } = await axiosInstance.post("/user/register", formData);
    return data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};
