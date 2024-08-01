using UnityEngine;

namespace TowerDefense
{
	// Implementation of the Squirrel5 hashing algorithm
	// http://eiserloh.net/noise/SquirrelNoise5.hpp
	public static class Hash
	{
		/// <summary>
		/// Returns a random unsigned int determined by the input values (seed is optional)
		/// </summary>
		public static uint SquirrelNoise5(uint seed, int value)
		{
			const uint SQ5_BIT_NOISE1 = 0xd2a80a3f; // 11010010101010000000101000111111
			const uint SQ5_BIT_NOISE2 = 0xa884f197; // 10101000100001001111000110010111
			const uint SQ5_BIT_NOISE3 = 0x6C736F4B; // 01101100011100110110111101001011
			const uint SQ5_BIT_NOISE4 = 0xB79F3ABB; // 10110111100111110011101010111011
			const uint SQ5_BIT_NOISE5 = 0x1b56c4f5; // 00011011010101101100010011110101

			uint mangledBits = (uint)value;
			mangledBits *= SQ5_BIT_NOISE1;
			mangledBits += seed;
			mangledBits ^= (mangledBits >> 9);
			mangledBits += SQ5_BIT_NOISE2;
			mangledBits ^= (mangledBits >> 11);
			mangledBits *= SQ5_BIT_NOISE3;
			mangledBits ^= (mangledBits >> 13);
			mangledBits += SQ5_BIT_NOISE4;
			mangledBits ^= (mangledBits >> 15);
			mangledBits *= SQ5_BIT_NOISE5;
			mangledBits ^= (mangledBits >> 17);
			return mangledBits;
		}

		/// <summary>
		/// Get what Formation an Enemy Spawner will spawn based off the Level, Spawner, Wave, amount of formations spawned this wave, and the amount of valid formations.
		/// </summary>
		/// <param name="levelSeed">Each level has a unique level seed that is generated when it the LevelInfo scriptable object is created.</param>
		/// <param name="waveIndex">The Wave Index of the Spawner Cohort that is choosing random Enemy Formations.</param>
		/// <param name="formationOrderIndex">How many Enemy Formations have already been selected before this one (what order this Formation will appear).</param>
		/// <param name="maxFormations">How many Enemy Formations does this cohort have.</param>
		public static int GetFormationIndex(uint levelSeed, int waveIndex, int formationOrderIndex, int maxFormations)
		{
			if (maxFormations == 1) return 0;

			const int PRIME1 = 198491317;   // large prime number with non-boring bits

			uint value = SquirrelNoise5(levelSeed, waveIndex + (PRIME1 * formationOrderIndex));
			var value01 = (float)value / uint.MaxValue;
			int result = Mathf.RoundToInt(value01 * (maxFormations - 1));   // reduce by one as the list count will be passed
			return result;
		}

		/// <summary> Return a random Integer between 0 (inclusive) and the maxValue (exclusive). </summary>
		public static int RandomInt(int maxValue, uint seed, int indexA, int indexB = 0, int indexC = 0, int indexD = 0)
		{
			if (maxValue == 1) return 0;

			const int PRIME1 = 198491317;   // large prime number with non-boring bits
			const int PRIME2 = 6542989;
			const int PRIME3 = 357239;

			uint value = SquirrelNoise5(seed, indexA + (PRIME1 * indexB) + (PRIME2 * indexC) + (PRIME3 * indexD));
			var value01 = (float)value / uint.MaxValue;
			int result = Mathf.RoundToInt(value01 * (maxValue - 1));	// max value is exclusive
			return result;
		}

		/// <summary> Return a random Float between 0 (inclusive) and the maxValue (inclusive). </summary>
		public static float RandomFloat(int maxValue, uint seed, int indexA, int indexB = 0, int indexC = 0, int indexD = 0)
		{
			if (maxValue == 0) return 0;

			const int PRIME1 = 198491317;   // large prime number with non-boring bits
			const int PRIME2 = 6542989;
			const int PRIME3 = 357239;

			uint value = SquirrelNoise5(seed, indexA + (PRIME1 * indexB) + (PRIME2 * indexC) + (PRIME3 * indexD));
			var value01 = (float)value / uint.MaxValue;
			float result = value01 * maxValue;
			return result;
		}
	}
}
